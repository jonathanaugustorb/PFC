function LoginPages() {
  return (
    <div>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-200 space-y-6 p-7 bg-red-500 rounded-md flex flex-col">
          <h1 className="bg-white text-4xl text-center">Login</h1>
          <input
            className="bg-amber-50"
            type="text"
            placeholder="Digite o usuario "
          ></input>
          <input
            className="bg-amber-50"
            type="password"
            placeholder="Digite a senha"
          ></input>
        </div>
      </main>
    </div>
  );
}

export default LoginPages;
