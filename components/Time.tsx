import { FC } from "react";

type TimeProps = {
    time?: string;
    isSmall?: boolean;
}

const Time: FC<TimeProps> = ({ time, isSmall = false }) => (
    <p className={`${isSmall ? 'text-lg' : 'text-5xl'} font-bold text-center text-yellow-300`} style={{ color: "#" }}>{time ?? "Loading..."}</p>
)


export default Time;