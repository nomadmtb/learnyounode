// Kyle G. Luce
// Learnyounode: program 2
// 7/17/2015

// console.log(process.argv);

// Create variable to store the running total.
var total=0;

// Iterate throguh it casting members to number.
for (i=2; i<process.argv.length; i++) {

   // Update our totals.
   total += Number(process.argv[i]);
}

// Print sum to screen.
console.log(total);
