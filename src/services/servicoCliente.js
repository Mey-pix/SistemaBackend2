const url = 'https://sistema-backend2.vercel.app/clientes/';

export async function gravar(cliente) {
    const res = await fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(cliente)
    })
    return await res.json();
}

export async function deletar(cliente) {
    const res = await fetch(url,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(cliente)
    })
    return await res.json();
}

export async function atualizar(cliente) {
    const res = await fetch(url,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(cliente)
    })
    return await res.json();
}

export async function consultar() {
    const res = await fetch(url,{
        method:'GET',
    })
    return await res.json();
}   