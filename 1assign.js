// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, creator, owner) {
    const nft = {
        name: name,
        description: description,
        creator: creator,
        owner: owner
    };
    nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for(let i =0;i<nftCollection.length;i++){
        console.log("NFT number:" + (i+1));
        console.log(nftCollection[i].name);
        console.log(nftCollection[i].description);
        console.log(nftCollection[i].creator);
        console.log(nftCollection[i].owner);
        console.log("---------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(nftCollection.length);
}

// Call your functions below this line
mintNFT("Apple", "First NFT", "Alice", "Bob");
mintNFT("Scron", "Second NFT", "Charlie", "Dave");
mintNFT("Weck", "Third NFT", "Eve", "Frank");

listNFTs();
getTotalSupply();
