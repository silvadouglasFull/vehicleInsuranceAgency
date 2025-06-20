import type { PrivaciPolicy } from "@flavor/texts/privaciPolicy/types";
import type React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ChildrenModal: React.FC<PrivaciPolicy> = ({ linkPolicy, policy }: PrivaciPolicy) => {
    const handleOpenPolicy = () => {
        window.open(linkPolicy.link)
    }
    return (
        <Card>
            <Card.Body>
                <Card.Text>
                    {policy}
                    <Link onClick={handleOpenPolicy} className="text-decoration-none text-info" to={''}>
                        {linkPolicy.text}
                    </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}