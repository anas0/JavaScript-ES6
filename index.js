//ES6 fat arrow function with This keyword
var javascript = {
    name: 'Javascript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function(){
        var self = this;
        this.libraries.forEach((a) => console.log(`${self.name} loves ${a}`));
    }
};

javascript.printLibraries();