/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_ID, _shoeName, _type, _colour, _company) {
   const nftMetadata ={
      "itemId" : _ID,
      "company" : _company,
      "name" : _shoeName,
      "type" : _type,
      "color" : _colour   
    }
    NFTs.push(nftMetadata)
    console.log("Minted : " + _shoeName)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0; i < NFTs.length; i++) {
      console.log("\n")
      console.log("ID : " + NFTs[i].itemId)
      console.log("Name : " + NFTs[i].name)
      console.log("Brand : " + NFTs[i].company)
      console.log("Type : " + NFTs[i].type)
      console.log("Colour : " + NFTs[i].color)
     
      // const element = array[i];  
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total NFT's minted :\n" + NFTs.length)
}

// call your functions below this line
mintNFT("cer69","Formal", "Oxford", "Brown", "louis Vuitton")
mintNFT("crf54","Suede", "Chelsa", "Burgandy", "Clark")
mintNFT("jhv65","Mid-Top Suede", "Derby", "Sand", "Bugatti")
mintNFT("vgh52","Solid Slip-On", "Loafer", "Black", "Van Heusen")
mintNFT("vgh52","Leather", "Brogue", "Burgandy", "Santoni")

listNFTs()
getTotalSupply()
