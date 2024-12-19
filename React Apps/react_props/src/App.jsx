import './App.css'
import Card from './components/Card/Card.jsx'
import fakeStore from './data.js'

function App() {

  // const fakeData =
  //   [
  //     {
  //       "id": 2,
  //       "description": "Sweet and savory sauces relishes spreads and seasonings",
  //       "name": "Condiments"
  //     },
  //     {
  //       "id": 1,
  //       "description": "Soft drinks coffees teas beers and ales",
  //       "name": "Beverages"
  //     },
  //     {
  //       "id": 3,
  //       "description": "Desserts candies and sweet breads",
  //       "name": "Confections"
  //     },
  //     {
  //       "id": 4,
  //       "description": "Cheeses",
  //       "name": "Dairy Products"
  //     },
  //     {
  //       "id": 5,
  //       "description": "Breads crackers pasta and cereal",
  //       "name": "Grains/Cereals"
  //     },
  //     {
  //       "id": 6,
  //       "description": "Prepared meats",
  //       "name": "Meat/Poultry"
  //     },
  //     {
  //       "id": 7,
  //       "description": "Dried fruit and bean curd",
  //       "name": "Produce"
  //     },
  //     {
  //       "id": 8,
  //       "description": "Seaweed and fish",
  //       "name": "Seafood"
  //     }
  //   ];

  return (
    <>
      {/* <table style={{border: "3px dashed green"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
          {
            fakeData.map((x) =>
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.description}</td>
              </tr>
            )
          }
        </tbody>
      </table> */}

      <div className="container text-center">
        <div className="row row-cols-3 d-flex justify-content-between row-gap-5">
          {
            fakeStore.map((p) =>
              <Card
              key={p.id}
              pImage={p.image}
              pTitle={p.title}
              pDesc={p.description}
              />
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
