const HomePage = () => {
    return (<div>
        <section className="grid grid-cols-3 mb-12">
          <div className="pl-10">
              <h1 className="uppercase font-bold">Tümer Görkem</h1>
          </div>
          <div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed et praesentium delectus commodi ipsa inventore. Cupiditate unde nisi quo asperiores eveniet nesciunt molestias explicabo, recusandae vel doloremque nam amet similique!</h1>
          </div>
          <div>
              <nav>
                  <ul className="flex flex-row justify-around px-20">
                      <li>
                          <a href="">About</a>
                      </li>
                      <li>
                          <a href="">Work</a>
                      </li>
                      <li>
                          <a href="">Contact</a>
                      </li>
                  </ul>
              </nav>
          </div>
        </section> 
        <section className="grid grid-column-2">
           <div className="flex justify-center ">
              <img 
                 alt="perso"
                 width="36%"
                 height="auto" />
           </div>
           <div className="flex flex-col items-center justify-around w-44 h-81 ml-2 mt-16">
              <div className="flex flex-col pb-10">
                  <i className="fa-brands fa-linkedin fa-2xl"></i>
                  <i className="fa-brands fa-instagram fa-2xl"></i>
              </div>
              <div className="h-10">
                  <p className="rotate-90 font-bold"> ——— gorkem@gmail</p>
              </div>
              <div className="flex items-end">
                  <i className="fa-solid fa-envelope"></i>
              </div>
           </div>
        </section>
    </div>)
}

export default HomePage;