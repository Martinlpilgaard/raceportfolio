import {useParams} from "react-router";

export default function ClientDetail() {
    const {id} = useParams();

    return (
        <section className= "clientDetail">
            <h1> Client detail ID: {id}</h1>
        </section>
    );
}