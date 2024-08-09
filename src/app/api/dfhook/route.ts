const GET = (req: any) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const caquery = searchParams.get('caq');
    return Response.json({id: 100, name: caquery})
}

const POST = (req: any) => {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const caquery = searchParams.get('caq');
    switch(caquery){
        case "course":
            return Response.json({id: 5, name: "data_science"})
        break;
        case "dept":
            return Response.json({id: 5, name: "computer_science"})
        break;
        case "school":
            return Response.json({id: 5, name: "science&tech"})
        break;
        default: 
            console.log('default');
        break;
    }
}

export {GET, POST};