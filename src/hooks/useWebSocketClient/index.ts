// src/hooks/useWebSocketClient.ts

import { host } from '@flavor/webSocket';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * @interface WebSocketMessage
 * @description Define a estrutura esperada para as mensagens recebidas do WebSocket.
 * Ajuste conforme o formato das mensagens que seu servidor envia.
 */
interface WebSocketMessage {
    type: string;
    payload: unknown;
}

/**
 * @function useWebSocketClient
 * @description Hook customizado para gerenciar uma conexão WebSocket em um componente React.
 * Ele inicia a conexão, lida com eventos de mensagem, abertura e fechamento,
 * e limpa a conexão quando o componente é desmontado.
 *
 * @param {boolean} shouldConnect - Um booleano que indica se a conexão deve ser estabelecida.
 * Isso permite controlar quando o hook ativa a conexão.
 * @returns {{
 * isConnected: boolean,
 * lastMessage: WebSocketMessage | null,
 * sendMessage: (message: string) => void,
 * error: Event | null
 * }} Um objeto contendo o status da conexão, a última mensagem, uma função para enviar mensagens e possíveis erros.
 */
export const useWebSocketClient = (shouldConnect: boolean): {
    isConnected: boolean;
    lastMessage: WebSocketMessage | null;
    sendMessage: (message: string) => void;
    error: Event | null;
} => {
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
    const [error, setError] = useState<Event | null>(null);
    // Usamos useRef para manter a instância do WebSocket através das renderizações
    // sem causar re-renderizações quando ela muda.
    const ws = useRef<WebSocket | null>(null);

    // Função para enviar mensagens
    const sendMessage = useCallback((message: string) => {
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(message);
        } else {
            console.warn('WebSocket não está conectado. Impossível enviar mensagem.');
        }
    }, []);

    useEffect(() => {
        // Se shouldConnect for falso ou a URL não for fornecida, não faça nada.
        if (!shouldConnect || !host) {
            // Se a conexão existir e não deveria estar conectada, feche-a.
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                ws.current.close(1000, 'Desconexão condicional pelo hook');
            }
            return;
        }

        // Se já houver uma conexão aberta, não crie uma nova.
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            return;
        }

        console.log(`Tentando conectar ao WebSocket em: ${host}`);
        ws.current = new WebSocket(host);

        ws.current.onopen = () => {
            console.log('WebSocket Conectado!');
            setIsConnected(true);
            setError(null);
        };

        ws.current.onmessage = (event) => {
            console.log('Mensagem recebida do servidor:', event.data);
            try {
                // Assumimos que as mensagens são JSON. Adapte se seu servidor envia texto puro.
                const parsedMessage: WebSocketMessage = JSON.parse(event.data);
                setLastMessage(parsedMessage);
            } catch (error) {
                String(error)
                console.warn('Mensagem não JSON recebida:', event.data);
                // Se não for JSON, trate como uma mensagem de texto simples
                setLastMessage({ type: 'text', payload: event.data });
            }
        };

        ws.current.onclose = (event) => {
            console.log('WebSocket Desconectado.', event);
            setIsConnected(false);
            // Se a desconexão não foi limpa (ex: erro de rede, servidor caiu),
            // você pode querer tentar reconectar ou logar o erro.
            if (!event.wasClean) {
                setError(event);
                console.error('Conexão WebSocket foi encerrada abruptamente.');
            }
        };

        ws.current.onerror = (event) => {
            console.error('Erro no WebSocket:', event);
            setIsConnected(false);
            setError(event);
        };

        // Função de limpeza do useEffect: fecha a conexão WebSocket quando o componente é desmontado.
        return () => {
            if (ws.current && ws.current.readyState === WebSocket.OPEN) {
                console.log('Fechando conexão WebSocket...');
                ws.current.close(1000, 'Componente desmontado ou shouldConnect mudou para false');
            }
        };
    }, [shouldConnect]); // Dependências: re-executa se a URL ou shouldConnect mudar

    return { isConnected, lastMessage, sendMessage, error };
};