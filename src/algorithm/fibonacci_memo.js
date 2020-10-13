function fibonacci(n){
    const arr = [];

    function _fibonacci(n){
        if(n == 0){
            return 0;
        }

        if(n == 1){
            return 1;
        }

        if(!arr[n]){
            arr[n] = fibonacci(n-1) + fibonacci(n - 2);
        }
        
        return arr[n];
    }
    
    return _fibonacci(n);
}
