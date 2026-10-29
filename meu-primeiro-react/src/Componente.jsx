function CartaoPerfil({nome, cargo, fotoUrl})
{   
    return(
        <div className="card-perfil">
            <img src={fotoUrl} alt={'Foto de {nome}'} className="foto-perfil"/>
            <div>
                <h3 className="nome">{nome}</h3>
                <p className="cargo">{cargo}</p>
            </div>
        </div>
    )

}
export default CartaoPerfil;