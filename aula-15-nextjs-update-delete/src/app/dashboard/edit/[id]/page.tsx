interface EditPokemonProps{
    params: Promise<{id: string}>;
}

export default async function EditPokemon({params}: EditPokemonProps){

    const {id} = await params;
    console.log(id);
    return(
        <p>{id}</p>
    )

}