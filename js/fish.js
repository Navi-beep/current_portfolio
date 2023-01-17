
{

    let form = document.getElementById('fishForm');
    console.log(form);

    async function handleSubmit(event){
        console.log('Please wait for that fish data')
        event.preventDefault()

        let inputFish = event.target.fish.value;

        let fishyData = await getFishData(inputFish)
        inputFish.value = ''
        console.log(fishyData)

        buildfishTable(fishyData)


    }


    async function getFishData(fish){
        let res = await fetch(`https://www.fishwatch.gov/api/species/${fish}`)
        let data = await res.json();
        return data;

        
}


    function buildfishTable(fishyData){
        console.log('making your fish table');
        let table = document.createElement('table');
        table.className = 'table'
        console.log(table)


        let thead = document.createElement('thead');
        let trHead = document.createElement('tr');
        

        //let thFishphoto = document.createElement('th');
        //thFishphoto.scope = 'col';
        //thFishphoto.innerHTML = 'Photo';
    

        let thSpecies = document.createElement('th');
        thSpecies.scope = 'col';
        thSpecies.innerHTML = 'Species Name';

        let thSciName = document.createElement('th');
        thSciName.scope = 'col';
        thSciName.innerHTML = 'Scientific Name';

        let thHabitat = document.createElement('th');
        thHabitat.scope = 'col';
        thHabitat.innerHTML = 'Habitat';


        let tableBody = document.createElement('tbody');

        let tableRow = document.createElement('tr');

        //let tdFishphoto = document.createElement('td');
        //tdFishphoto.scope = 'row'
        //tdFishphoto.innerHTML = `${fishyData[0]['Image Gallery'][0]['src']}`;


        let tdSpecies = document.createElement('td');
        tdSpecies.scope = 'row'
        tdSpecies.innerHTML = `${fishyData[0]['Species Name']}`;

        let tdSciName = document.createElement('td');
        tdSciName.scope = 'row'
        tdSciName.innerHTML = `${fishyData[0]['Scientific Name']}`;

        let tdHabitat = document.createElement('td');
        tdHabitat.scope = 'row'
        tdHabitat.innerHTML = `${fishyData[0]['Habitat']}`;

        //tableRow.append(tdFishphoto)
        tableRow.append(tdSpecies);
        tableRow.append(tdSciName);
        tableRow.append(tdHabitat);

        tableBody.append(tableRow);
        thead.append(trHead);
        //trHead.append(thFishphoto)
        trHead.append(thSpecies);
        trHead.append(thSciName);
        trHead.append(thHabitat);
        table.append(thead);
        table.append(tableBody);


        let display = document.getElementById('fishTable');
        display.innerHTML='';
        display.append(table);
        console.log(display);

    }



    form.addEventListener('submit', handleSubmit);

}