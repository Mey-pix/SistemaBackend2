const url = 'https://sistema-backend-flax.vercel.app/usuarios/';

export async function gravar(usuario) {
    const res = await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(usuario)
    })
    return await res.json();
}

export async function deletar(usuario) {
    const res = await fetch(url,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(usuario)
    })
    return await res.json();
}

export async function atualizar(usuario) {
    const res = await fetch(url,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(usuario)
    })
    return await res.json();
}

export async function consultar() {
    const res = await fetch(url,{
        method:'GET'
    })
    return await res.json();
}

export async function login(nomeU, senhaU) {
    const res = await fetch(url+"login",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            nome: nomeU,
            senha: senhaU
        })
    })
    return await res.json();
}