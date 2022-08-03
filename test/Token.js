const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");


describe("crowdfunding", funtion () {
    let crowdfunding: Contract;

    beforeEach(async () => {
        // Deploy the contract
        const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
        crowdfunding = await Crowdfunding.deploy();
        await crowdfunding.deployed();
    });

});

it("Should start a project", async function () {
    const test = await Contract.inicioProyecto(titulo,descripcion,_inicio,_final,cantidadARecaudar);
    expect(test).to.equal(nuevoProyecto)

});

