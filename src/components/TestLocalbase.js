import Localbase from "localbase";

const TestLocalbase = () => {

    //lav en nyt instance af databasen Localbase med et "navn"
    let myDatabase = new Localbase("myDatabase");

    const insertIntoDb = () => {
        myDatabase.collection("users").add({
            id: 232353454,
            name: "Carsten",
            age: 27,
        })
    }

    const getFromDb = () => {
        myDatabase.collection("users").get().then(users => { console.log(users) })
    }

    const removeFromDb = () => {
        myDatabase.collection("users").delete()
    }

    return ( 
        <>
            <button onClick={insertIntoDb}>Tilføj en bruger til databasen</button>
            <button onClick={getFromDb}>Hent alle brugere fra databasen</button>
            <button onClick={removeFromDb}>Slet alle brugere fra databasen</button>
        </>
     );
}
 
export default TestLocalbase;