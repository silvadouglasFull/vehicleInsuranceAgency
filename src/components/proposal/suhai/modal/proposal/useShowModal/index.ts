import type { UseShowModal } from "@components/proposal/suhai/modal/proposal/useShowModal/types";
import { useState } from "react";

export const useShowModal = (): UseShowModal => {
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return {
        show,
        setShow,
        handleClose,
        handleShow
    }
}