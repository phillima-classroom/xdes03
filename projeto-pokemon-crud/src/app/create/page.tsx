export default function Create() {
  return (
    <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email"/>

        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Senha"/>

        <label htmlFor="password">Confirmar Senha</label>
        <input type="password" name="password" id="password" placeholder="Confirmar Senha"/>

        <button>Cadastrar</button>
    </form>
  );
}