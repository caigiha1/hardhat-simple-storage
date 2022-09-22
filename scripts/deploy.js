// imports
const { ethers } = require("hardhat")

// async main

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )

    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    await simpleStorage.deployed()
    // what's the private key?
    // what the rpc
    console.log(`Deploy contract to: ${simpleStorage.address}`)
}

// main

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
