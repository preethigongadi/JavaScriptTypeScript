function BaseType(serialNumber)
{
    this.serialNumber = serialNumber;
}

function ElectronicType(chipset, modelNumber) 
{
    this.chipset = chipset;
    this.modelNumber = modelNumber;
}

function ConsumerGadget(screenDimension) 
{
    this.screenDimension = screenDimension;
}

var p1 = new BaseType("ABC123");

ElectronicType.call(p1,"AMD400","MNC123");
console.log("p1",p1);

//Function borrowing

ConsumerGadget.call(p1,"600x800");
console.log("p1",p1);
