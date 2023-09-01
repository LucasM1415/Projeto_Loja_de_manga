function showCategory(category) {
    let categoryContent = document.getElementById("categoryContent");
    let content = "";

    if (category === "selecao") {
        content = `
      <div class="Introdução"> 
        <h2>Bem Vindo!</h2>
        <p>Bem-vindo à nossa seleção de mangás! Aqui você encontrará os melhores títulos e histórias incríveis.</p>
      </div>
        `;
    } else if (category === "shonen") {
        content = `
            <h2>Mangas Shonen</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/91AvEVbeDhL._AC_UF1000,1000_QL80_.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 1">
                        <div class="card-body">
                            <h5 class="card-title">Naruto</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/81ZNkhqRvVL._AC_UF1000,1000_QL80_.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                        <div class="card-body">
                            <h5 class="card-title">Demon Slayer</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="https://static.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png/revision/latest?cb=20140106204057&path-prefix=pt" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                    <div class="card-body">
                        <h5 class="card-title">One Piece</h5>
                        <p class="card-text">Descrição do Manga.</p>
                        <div class="mt-auto text-center">
                        <a href="#" class="btn btn-comprar">Comprar</a>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        `;
    } else if (category === "shojo") {
        content = `
            <h2>Mangas Shojo</h2>
            <div class="row">
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="https://jbchost.com.br/editorajbc/wp-content/uploads/2014/03/capa_sailor_moon_01_g.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                <div class="card-body">
                    <h5 class="card-title">Sailor Moon</h5>
                    <p class="card-text">Descrição do Manga.</p>
                    <div class="mt-auto text-center">
                    <a href="#" class="btn btn-comprar">Comprar</a>
                </div>
                </div>
            </div>
        </div>

        <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://editorajbc.com.br/wp-content/uploads/2019/08/Fruits-Basket-Collectors-Edition-01-Sobrecapa_p.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                        <div class="card-body">
                            <h5 class="card-title">Fruits Basket</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/81rzgYGQrSL._AC_UF1000,1000_QL80_.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                        <div class="card-body">
                            <h5 class="card-title">Ouran HS Host Club</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (category === "seinen") {
        content = `
            <h2>Mangas Seinen</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://comicboom.com.br/loja/wp-content/uploads/2022/10/berserk-1.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Berserk</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://2.bp.blogspot.com/-ianmVUTWOmg/Uk4AWBIs5SI/AAAAAAAAFds/gOkp5jSIl4k/s1600/monster_poster_by_correlola-d59ecuh.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Monster</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://4.bp.blogspot.com/-OxSyc3HgXIA/V2qltNjy5OI/AAAAAAABBg4/t8MughuOrlIFFnth5Mkh20Rt1T148xRfACLcB/s1600/VAGABOND01_1a-e-4a-capa.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Vagabond</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (category === "romance") {
        content = `
            <h2>Mangas de Romance</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/51rsjJvXMsL.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                        <div class="card-body">
                            <h5 class="card-title">Kimi ni Todoke</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-comprar">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/51Y82LS+XEL.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                        <div class="card-body">
                            <h5 class="card-title">Ao Haru Ride</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-comprar">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://gargarstegosaurus.files.wordpress.com/2014/03/orange-vol-1.jpg" class="card-img-top img-fluid rounded" alt="Manga Shonen 2">
                        <div class="card-body">
                            <h5 class="card-title">Orange</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-comprar">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
     else if (category === "terror") {
        content = `
            <h2>Mangas de Terror</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/pt/8/88/Uzumaki.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Uzumaki</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://comicboom.com.br/loja/wp-content/uploads/2022/11/1-4.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Tóquio Ghoul</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://comicboom.com.br/loja/wp-content/uploads/2018/05/I-am-a-Hero-1.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">I Am a Hero</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="mt-auto text-center">
                            <a href="#" class="btn btn-comprar">Comprar</a>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        `;
    } else if (category === "comedia") {
        content = `
            <h2>Mangas de Comédia</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/41jYLd1ItNL._AC_UF1000,1000_QL80_.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Gintama</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-comprar">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/pt/3/3f/OnePunchMan_manga_capa.png" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">One Punch Man</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-comprar">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/91wvtiXKIRS._AC_UF1000,1000_QL80_.jpg" class="card-img-top img-fluid rounded" alt="Manga Seinen 1">
                        <div class="card-body">
                            <h5 class="card-title">Daily Lives of HS Boys</h5>
                            <p class="card-text">Descrição do Manga.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-comprar">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    

    categoryContent.innerHTML = content;
}
