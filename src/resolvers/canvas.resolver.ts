export const CanvasQuery = {
    getCanvas: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.canvas({ id: args.id });;
        }
    },

    getAllCanvases: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.canvases();
        }
    }
};


export const CanvasMutation = {

    /* 
        mutation{
            createCanvas(data: {
            project_id: {
            connect: {
                id: "ckarcrd6q000g0776u88x800o"
                }
            }
            table_id: {
            create: {
            }
            }
            name: "testCanvasCreatedPlayground"
            createdBy: {
                connect: {
                id: "ckarcrczl00080776jzr3qcyh"
            }
            }
            updatedBy: {
                connect: {
                id: "ckarcrczl00080776jzr3qcyh"
            }
            }
        }){
            name
        }
        }
    */

    createCanvas: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.createCanvas(args.data);
        }
    },

    


    /* 
        mutation{
            updateCanvas(
            canvasId: "ckaxnlgp7000c07464n37e3sh",
            data: {
                name: "newCanvasName",
                updatedBy: {
                connect: {
                        id: "ckarcrczl00080776jzr3qcyh"
                    }
                }
            }
            ){
            name
            }
        }
    */

    updateCanvas: {
        resolve: async (root, args, ctx, info) => {
            const userId = ctx.userId;
            return await ctx.db.updateCanvas({
                where: {id: args.canvasId},
                data: args.data
            });
        }
    },

    
    deleteCanvas: {
        resolve: async (root, args,ctx, info) => {
            return await ctx.db.deleteCanvas({
                id: args.canvasId
            });

        }
    }
};