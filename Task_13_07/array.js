        console.log('Here is : ', 'array')



        /*
        1
        Correct the syntax error
        [ 1,7  9  45, ]
        ["Str" "alex","moh"
        'the','fox' 'over' lazy, 'dog',  ]
        */

        let arr= [ 1,7,  9 , 45 ];
        let arr2=["Str", "alex","moh",'the','fox', 'over', 'lazy', 'dog' ]

        /*
        2
        What the index of "Banana","Tomato"
        var fruits=["Tomato","Banana","Watermelon"]

        */

        var fruits=["Tomato","Banana","Watermelon"];

        // What the index of "Banana" --> 1
        // What the index of "Tomato" --> 0



        /*
        3
        Create an array represents your:
        1- Favorite Food (5)
        2- Favorite Sport (3)
        3- Favorite Movie (4)
        */

        let myFav=[,'Mansaf','Shawerma','Maqlobeh','chechbarak','Kabab','Football','Besketball','Swimming','Alresalah','Source code','Boyka','007']

        /*
        4
        Create a function called firstOfArray
        that take an array as a parameter
        and return the first element in an array

        Ex: firstOfArray([1,4,5]) => 1
        Ex: firstOfArray(["t","u","g","x"]) => "t"
        */
        function firstOfArray(para1){
            return para1[0];
        }

        console.log(firstOfArray([50,20,10]));



        /*
        5
        Create a function called lastOfArray
        that take an array as a parameter
        and return the first element in an array

        Ex: lastOfArray([1,4,5]) => 5
        Ex: lastOfArray(["t","u","g","x"]) => "x"
        */
        function lastOfArray(para1){
            return para1[para1.length-1];
        }

        console.log(lastOfArray([50,20,10]));

        /*
        6
        Using console make this array to be like this one (push, unshift, shift, pop)

        var array = [0,5,7,9]
        => [1,3,4,6,8,9,10]
        */

        var array=[];
        array.push(1,3,4,6,8,9,10);
        console.log(array);

        /*
        7
        Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
        var array2 = [5,9,-7,3.5]
        */
        var array2=[];
        array2.push(5,9,-7,3.5);
        console.log(array2);


        /*







        8
        Create a function called middleOfArray
        that take an array as a parameter
        and return the middle element in an array if it is have an odd elemnets
        and return the two middle elemnt in an array if it is have an even elemnets

        Ex: middleOfArray([1,4,5]) => 4
        Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
        */

        function middleOfArray(para1){
            
            if(para1.length%2==0){
                let  para2=[para1[para1.length/2-1],para1[para1.length/2]]
                return para2;
                }
            else
            return para1[Math.ceil(para1.length/2-1)]
        }
        console.log(middleOfArray([2,4,6,8,10,12,14]));

        /*
        9
        Using assignment operator (=)
        make the animals array have these animals
        var animals = ['cat', 'ele', 'bird']
        animals; => ['zebra', 'elephant']
        ** hint: animals[0]=something


        var nums= [1,2,3,8,9]
        nums => [5,-22,3.5,44,98,44]
        */

        var animals = ['cat', 'ele', 'bird'];
        animals[animals.length]= 'zebra';
        animals[animals.length]= 'elephant';
        console.log(animals);








        /*
        10
        Create a function called indexOfArray
        that accept an array and index
        and return what this array have in this index

        var nums= [1,2,3,8,9]
        Ex: indexOfArray(nums,3) => 8
        Ex: indexOfArray(nums,1) => 2
        Ex: indexOfArray(nums,4) => 9

        **try more cases by your self
        */

        function indexOfArray(arr,para){
            return arr[para]

        }

        var nums= [1,2,3,8,9]
        console.log(indexOfArray(nums,3))

        /*
        11
        Create a function called arrayExceptLast
        that accept an array
        and return the entire array except the last elemnt
        ** hint: search abou the function that will cut the array on MDN
        var nums= [1,2,3,8,9]
        Ex: arrayExceptLast(nums) =>  [1,2,3,8]

        **try more cases by your self
        */
        function arrayExceptLast(arr)
        {
            arr.pop(arr.length-1);
           return arr;
        }
        var nums= [1,2,3,8,9]
        console.log( arrayExceptLast(nums) )
        // [1,2,3,8]

        /*
        12
        Create a function called addToEnd
        that accept an array and value
        and return the entire array with add this value to the end of this array

        var nums= [1,2,3,8,9]
        Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

        **try more cases by your self
        */

        function addToEnd(arr,para){

            arr.push(para);
            return arr;
        }
        var nums= [1,2,3,8,9]
        // var nums= [1,2,3,8,9]
        // Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
        console.log(  addToEnd(nums,55))




        // all the exercises below should solved 2 times: 
        // 1- for loop 
        // 2- while lopp
        /*







        13
        Create a function called sumArray
        that accept an array
        and return the summation of all elemnt in this array

        var nums= [1,2,3,8,9]
        Ex: sumArray(nums) => 23

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

        function sumArray(arr){
            let sum=0;
            for(e in arr)
                sum+=arr[e];
            return sum;
        }
      
        function sumArrayWh(arr){
            let sum=0;
            let i=0;
            while(i< arr.length){
                sum+=arr[i];
                i++;
                }
                return sum;
        }

        console.log(sumArrayWh([10,20,30,40,50]))

        /*
        14
        Create a function called minInArray
        that accept an array
        and return the minimum value inside this array

        var nums= [1,2,3,8,9]
        Ex: minInArray(nums) => 1

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

        // function minInArray(arr){

        //     let min = arr[0];
        //     for (let i=1;i<arr.length;i++)
        //         if (arr[i]<min)
        //             min=arr[i];
        //          return min;
        //     }
        //     var nums= [1,-5,2,3,8,9];
        //     console.log(minInArray(nums))

        function minInArrayWh(arr){
            let min = arr[0];
            let i=1;
            while(i<arr.length){
             if (arr[i]<min)
                min=arr[i];
                i++;
                }
                return min;
            }

            var nums= [1,-500,2,3,8,9];
            console.log(minInArrayWh(nums));



        /*
        15
        Create a function called removeFromArray
        that accept an array and elemnt to remove
        and return the array after remove this elemnt from it

        var nums= [1,2,3,8,9]
        Ex: minInArray(nums,8) => [1,2,3,9]

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

        function removeFromArray(arr,para){
            let arr2=[];
            for(let i=0; i < arr.length ; i++)
                if(arr[i] != para)                    
                arr2.push(arr[i]);
                return arr2;
        }
        console.log(removeFromArray([10,10,10,20,30,10],10));

       
        function removeFromArrayWh(arr,para){
        let arr2=[];
        let i=0;
            while( i < arr.length){
                if(arr[i] != para)                    
                arr2.push(arr[i]);
                i++;
            }
            return arr2;
        }
        console.log(removeFromArrayWh([10,10,10,20,30,10],10));

       






        /*
        16
        Create a function called oddArray
        that accept an array
        and return an array have only the odd elemnts

        var nums= [1,2,3,8,9]
        Ex: oddArray(nums) => [1,3,9]

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

        function oddArray(arr){
            let oddArr=[];
            for(e in arr)
            if (arr[e] %2 !=0)
                oddArr.push(arr[e]); 
            return oddArr;
            
        }
        var nums= [1,2,3,8,9];
        console.log(oddArray(nums));

        function oddArrayWh(arr){
            let oddArr=[];
            let i=0;
            while (i<arr.length){
                if( arr[i]%2 != 0)
                oddArr.push(arr[i]); 
                i++;
            }
            return oddArr;
            
        }
        var nums= [1,2,3,8,9];
        console.log(oddArrayWh(nums));


        /*
        17
        Create a function called aveArray
        that accept an array
        and return the average of the numbers inside this array

        var nums= [1,2,3,8,9]
        Ex: aveArray(nums) => 4.6

        var nums2= [1,2,3,8,9,77]
        Ex: aveArray(nums) => 16.6

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */
        function aveArray(arr){
            let sum=0;
            for(let i=0;i<arr.length;i++)
                sum+=arr[i]
                return sum/arr.length
            }
   
          function aveArrayWh(arr){
            let sum=0;
            let i=0;
            while(i<arr.length){
                sum+=arr[i];
                i++;}
                return sum/arr.length
            }





            var nums= [1,2,3,8,9]
            console.log( aveArray(nums))
            var nums= [1,2,3,8,9,77]
            console.log( aveArrayWh(nums))










        /*
        18
        Create a function called shorterInArray
        that accept an array of strings
        and return the shortest string inside this array (first)

        var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
        Ex: shorterInArray(strings) => "alex"

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

        function shorterInArray(arr){

                let min=arr[0];
                for (let i=1;i<arr.length;i++)
                    if (arr[i].length < min.length)
                        min=arr[i]
                        return min;
                
        }
        function shorterInArrayWh(arr){

                let min=arr[0];
                let i=1;
                while (i<arr.length){
                    if (arr[i].length < min.length)
                        min=arr[i];
                        i++;
                    }
                        return min;
                
        }


        var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
        console.log(shorterInArray(strings))// => "alex"

        console.log(shorterInArrayWh(strings))// => "alex"




        /*
        19
        Create a function called repeatChar
        that accept a string and char
        and return the times that this char repeat inside this string

        var string= "alex mercer madrasa rashed2 emad hala"
        Ex: repeatChar(string,"a") => 6
        Ex: repeatChar(string,"z") => 0

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

        function repeatChar(para1,para2){

            let counter=0;
            for(let i=0;i<para1.length;i++)
                if(para1[i] === para2)  
                counter+=1;
                return counter;

        }
        function repeatCharWh(para1,para2){
            let counter=0;
            let i=0;
            while(i<para1.length){
                if(para1[i] === para2)  
                counter+=1;
                i++; 
                }
                return counter;
           
        }



        var string= "alex mercer madrasa rashed2 emad hala"
        console.log(repeatChar(string,"a"))
        console.log(repeatCharWh(string,"a"))



        /*
        20
        Create a function called evenIndexOddLength
        that accept an array of strings
        and return a new array that have the string with odd length in even index

        var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
        Ex: evenIndexOddLength(strings) => ["madrasa"]

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */
       
        function evenIndexOddLength (arr)
        {
            let arr2=[];
            for (let i=0;i<arr.length;i++)
            if(i %2 ==0 && arr[i].length %2 !=0 )
                        arr2.push(arr[i])
            return arr2;

        }
        
        function evenIndexOddLengthWh (arr)
        {
            let arr2=[];
            let i=0;
            while (i<arr.length){
                if(i %2 ==0 && arr[i].length %2 !=0 )
                        arr2.push(arr[i])
                        i++;}
            return arr2;

        }
        var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
        //Ex:  => ["madrasa"]
        console.log(evenIndexOddLength(strings))
        console.log(evenIndexOddLengthWh(strings))










        /*
        21
        Create a function called powerElementIndex
        that accept an array of number
        and return a new array that have the elemnt power by the index of it self

        var nums= [44, 5, 4, 3, 2, 10]
        Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */

            function powerElementIndex(arr){

                let expArr=[];
                for(let i=0;i<arr.length;i++)
                    expArr.push(arr[i]**i);
                    return expArr;
                
            }
            function powerElementIndexWh(arr){
                let expArr=[];
                let i=0;
                while(i<arr.length){
                    expArr.push(arr[i]**i);
                    i++;}
                return expArr;
                
            }


            var nums= [44, 5, 4, 3, 2, 10]
            console.log( powerElementIndex(nums)) 
            console.log( powerElementIndexWh(nums)) 



        /*
        22
        Create a function called evenNumberEvenIndex
        that accept an array of nums
        and return a new array that have the even number in even index

        var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
        Ex: evenNumberEvenIndex(nums) => [2,8,34]

        ** solve it one time using for loop and another using while loop
        **try more cases by your self
        */
        function evenNumberEvenIndex(arr){
            let evenArr=[];
            for(let i=0;i<arr.length;i++)
                if(i %2 ==0 && arr[i]%2 ==0)
                    evenArr.push(arr[i])
            return evenArr;
        }
        function evenNumberEvenIndexWh(arr){
            let evenArr=[];
            let i=0;
            while(i<arr.length){
                if(i %2 ==0 && arr[i]%2 ==0)
                    evenArr.push(arr[i])
                    i++;
                }
            return evenArr;
        }
        var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
        console.log(evenNumberEvenIndex(nums)) // => [2,8,34]
        console.log(evenNumberEvenIndexWh(nums)) // => [2,8,34]