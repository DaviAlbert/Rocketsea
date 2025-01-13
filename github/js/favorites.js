import { UsuarioGithub } from "./UsuarioGithub.js"

export class Favoritas {
    constructor(root) {
        this.root = document.querySelector(root)
        this.carregar()
    }

    carregar() {
        this.entries = JSON.parse(localStorage.getItem('@github-Favoritas:')) || []
        }
    
    salvar() {
        localStorage.setItem('@github-Favoritas:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {
            const existe = this.entries.find(entrada => entrada.login === username)
            const user = await UsuarioGithub.search(username)
            if(existe){
                throw new Error('usuário já cadastrado.')
            }

            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.salvar()

            } catch(error) {
                alert(error.message)
            }        
    }

    deletar(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
        this.entries = filteredEntries
        this.update()
        this.salvar()
    }
}
export class VerFavoritos extends Favoritas {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')

            this.add(value)
        }
    }
    
    update() {
        this.remover()
        
        this.entries.forEach(user => {
            const row = this.criar()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remover').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if(isOk) {
                    this.deletar(user)
                }
            }
            this.tbody.append(row)
        })
    }

    criar() {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td class="user">
           <img>
           <a target="_blank">
             <p></p>
             <span></span>
           </a>
         </td>
         <td class="repositories"></td>
         <td class="followers"></td>
         <td>
           <button class="remover">&times;</button>
         </td>
        `
        return tr
        }

    remover() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        });
    }
}