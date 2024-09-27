import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
    const[name, setName] = useState<string>("Puma Shoes");
    const[price, setPrice] = useState<number>(2000);
    const[stock, setStock] = useState<number>(10);
    const[photo, setPhoto] = useState<string>(img);

    const changeImageHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];
        const reader: FileReader = new FileReader();

        if(file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if(typeof reader.result === "string") setPhoto(reader.result);
            };
        }
    };

  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar/>

      {/* Main-page */}
      <main className="product-management">
        <section>
            <strong>ID - asnmdkasndmsan</strong>
            <img src={photo} alt="product-image" />
            <p>{name}</p>
            {
                stock > 0? (
                    <span className="green">{stock} Available</span>
                ): (
                    <span className="red">Not Available</span>
                )
            }

            <h3>${price}</h3>
        </section>
        <article>
            <form>
                <div>
                    <h2>New Product</h2>

                    <div>
                        <label>Name</label>
                        <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div>
                        <label>Price</label>
                        <input required type="number" placeholder="price" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
                    </div>

                    <div>
                        <label>Stock</label>
                        <input required type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(Number(e.target.value))}/>
                    </div>

                    <div>
                        <label>Photo</label>
                        <input required type="file" onChange={changeImageHandler}/>
                    </div>

                    <button type="submit">Update</button>
                </div>
                {
                    photo && <img className="newproduct-image" src={photo} alt="New Image" />
                }
            </form>
        </article>
      </main>
    </div>
  )
}

export default ProductManagement
