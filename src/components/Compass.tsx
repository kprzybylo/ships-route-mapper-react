import { Avatar } from "@material-ui/core";
import { MouseEvent } from "react";

export function Compass(props: {
    rotate(event: MouseEvent<HTMLDivElement>): void,
    rotationAngle: number
}) {
    return (
        <div
            style={{
                backgroundImage: "url('/images/compass2.png')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            onClick={props.rotate}
        >
            <Avatar src="/icons/compass.svg"
                style={{
                    transform: `rotate(${props.rotationAngle}deg)`,
                    transitionDuration: '1s',
                    transitionProperty: 'transform'
                }}
            />
        </div>
    );
}