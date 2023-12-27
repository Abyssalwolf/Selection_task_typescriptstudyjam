function sum( a : number, b : number, c? : number) : number{ // question is an optional parameter
    if (c)
        return (a+b+c)
    else
        return (a+b)
}

sum(1,5)

export{}