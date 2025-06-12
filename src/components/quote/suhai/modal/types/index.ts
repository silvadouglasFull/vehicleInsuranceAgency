export type ModalProps = {
    title: string
    children: React.ReactNode
    onHide: () => void
    show: boolean
}