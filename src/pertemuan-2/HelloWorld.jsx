export default function HelloWorld(){
     const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01",
        usia : 50
    }


    return (
        <div>
            <h1>Hello World</h1>
 
            <img src= " ./img/strawberryAul.jpg" width ={100}/>
            <p>Selamat Belajar ReactJs</p>
            <GreetinBinjai/>
            <hr/>
            <QuoteText/>
                 <UserCard 
	            nama="Aulia" 
	            nim="12345"
	            tanggal={new Date().toLocaleDateString()}
	          />

               <UserCard 
	            nama="Suci" 
	            nim="54321"
	            tanggal={new Date().toLocaleDateString()}
	          />
              <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetinBinjai(){
    return (
        <small>Salam dari Binjai 💕❤️😘</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Tanggal: {props.usia}</p>

        </div>
    )
}