import Card from "./Card";

function Cards() {
    return (
        <>
            <Card title="React"
                description="O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). 
                Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. 
                Os componentes dessa ferramenta foram desenvolvidos pelo Facebook."
                imgPath="https://pluga.co/blog/wp-content/uploads/2020/06/home_office.png"

            />

            <Card title="JavaScript"
                description="JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web, 
                toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática,
                mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc."
                imgPath="https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg"

            />

            <Card title="HTML/CSS"
                description="HTML (Hypertext Markup Language) e CSS (Cascading Style Sheets) são duas das principais tecnologias para a construção de páginas da Web. 
                HTML fornece a estrutura da página, CSS o layout (visual e auditivo), 
                para uma variedade de dispositivos. Junto com gráficos e scripts, HTML e CSS são a base da construção de páginas da Web e aplicativos da Web ."
                imgPath="https://www.felipefialho.com/static/a9db98a764a23be1b45e7878919c90f9/2019-o-que-front-enders-precisam-saber-cover.png"

            />

        </>

    );

}

export default Cards;