import AppRoute from "./AppRoute";

const Layout = () => {
    return(
        <>
        <header >
        <h1>This is A todo Page</h1>
      </header>
      <main style={{ margin: "150px" }}>
        <AppRoute />
      </main>
      <footer></footer>
    </>
        
    )
}
export  default Layout