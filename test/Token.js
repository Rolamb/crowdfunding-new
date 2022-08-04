const { expect } = require("chai");
const { Contract } = require("ethers");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");


describe("Deploys the contract", function () {
    this.beforeAll(async function(){
      try{
        provider = waffle.provider;
  
        //Market
        const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
        crowdfunding = await Crowdfunding.deploy();
        await crowdfunding.deployed();
      } 
      catch(ex){
        console.error(ex);
      }
    })
    it("Deployed all contracts", async function () {
    });
  });

// Test suite
describe("Should start a project", function(){
    //Check if require works as intended
    it("Fails if the start time is inferior to now", async function(){
        await expect(crowdfunding.inicioProyecto("Test","Description",1,1,100)).to.be.revertedWith("inicio < now");
    });
    
    //Check if success at a function
    it("Starts a project", async function(){
        let latestBlock = await provider.getBlock("latest");
        let futureDate = latestBlock.timestamp+100;
        await expect(crowdfunding.inicioProyecto("Test","Description",futureDate, futureDate+200, 100), "Starts the project").to.emit(crowdfunding, "proyectoIniciado");
        let listaProyectos = await crowdfunding.listaTodosProyectos();
        await expect(listaProyectos.length).to.equal(1);
    });
  });

