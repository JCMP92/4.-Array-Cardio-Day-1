// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
        const result= inventors.filter(inventor => inventor.year > 1499 && inventor.year < 1600);
        console.table(result);
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
        const result1= inventors.map(inventor => inventor.first + " " + inventor.last);
        console.log(result1);
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
        const result2= inventors.sort(function(a, b){return a.year - b.year});
        console.log(result2);
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
        const result3= inventors.reduce(
          (total, inventor) => {return total + (inventor.passed - inventor.year)
          }, 0); //0 represents the first total value, we need to do this so it doesn´t get the 'undefined' value.
        console.log(result3);
      // 5. Sort the inventors by years lived
      let yearsLived = inventors.map(inventor => inventor.passed - inventor.year);
      console.log(yearsLived);
      const result4= inventors.sort(function(a, b){return a.yearsLived - b.yearsLived});
      console.log(result4);

      const oldest = inventors.sort(function (a, b) {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
        
      })  
      console.table(oldest);  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      //const category = document.querySelector('.mw-category');
      //const links = Array.from(category.querySelectorAll('a')); //'a' represents the anchors.
      //const de = links
                  //.map(link =>link.textContent)
                  //.filter(streetName => streetName.includes('de')); //  NOTE: this one is commented, just copy and paste directly on the console of the Devtools of the wikipedia link
                  //(https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const fullName = people.sort((lastName, firstName) => {
        const [aLast, aFirst] = lastName.split(', ');
        const [bLast, bFirst] = firstName.split(', ');
        return aLast > bLast ? 1 : -1; // a comparison using a TERNARY OPERATOR.
      });
      console.table(fullName);
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'truck', 'truck', 'van', 'bike', 'bike', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van' ];

      const vehicle = data.reduce(function (obj, item) {
        if(!obj[item]){
          obj[item]=0;
        }//If the item doesn't exist in obj, first we create it and assign it a value of 0 inside obj. The the next piece of code increments that value.
        //If the item already exist in obj, this piece of code will be ignored.
        obj[item]++;
        return obj;
      }, {});