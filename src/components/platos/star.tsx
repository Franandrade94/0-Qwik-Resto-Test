import { component$ } from "@builder.io/qwik";

type StarProps = {
    filled: boolean;
};

function Star(props: StarProps) {
    return (
        <span>{props.filled ? '★' : '☆'}</span>
    );
}


export default component$(Star);
