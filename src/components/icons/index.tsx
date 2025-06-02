import '@assets/fontawesome/css/all.css';
import type { IConProps, NameIcon } from "@components/icons/types";
import React from 'react';
export const Icon: React.FC<NameIcon & IConProps> = ({ name, className, style }) => (<i style={style} className={`${name} ${className}`}></i>)