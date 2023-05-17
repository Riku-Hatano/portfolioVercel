// const solve = (numbers: number[], primes: number[] = []): number[] => {

//     const rest = numbers.【関数①】((number: number): boolean => {
//       return number % numbers[0] !== 0;
//     });
  
//     return 【条件②】 ? solve(【値③】, 【値④】) : primes.concat(numbers[0]);
//   };
  
//   const numbers2To100 = [...Array(98)].map((_: unknown, i: number): number => {
//     return 【値⑤】;
//   });
  
//   const answer = solve(numbers2To100);



  const solve = (numbers: number[], primes: number[] = []): number[] => {

    const rest = numbers.map((number: number): boolean => {
      return number % numbers[0] !== 0;
    });
  
    return rest ? solve(numbers.slice(numbers[0], 1), ) : primes.concat(numbers[0]);
  };
  
  const numbers2To100 = [...Array(98)].map((_: unknown, i: number): number => {
    return [...Array(98)][i];
  });
  
  const answer = solve(numbers2To100);