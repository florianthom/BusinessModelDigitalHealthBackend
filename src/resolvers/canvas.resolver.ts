import { Prisma, ID_Input} from '../generated/prisma-client';

export interface Context
{
    db: Prisma;
    userId: ID_Input
}

// query {
//     getAllCanvases{
//       strategy_id
//       {
//         name
//       }
//     }
// }

export const CanvasQuery = {
    getCanvas: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.canvas({ id: args.id });
        }
    },

    getAllCanvases: {
        resolve: (root, args, ctx, info) => {
            return ctx.db.canvases();
        }
    },




    getCanvasOfUser: {
        resolve: (root, args, ctx: Context, info) => {
            const userId = ctx.userId;
            return ctx.db.canvases({where: {id: args.id, project_id: {user_id: {id: userId}}}}).then(a => a[0]);
        }
    },

    getAllCanvasesOfUser: {
        resolve: (root, args, ctx, info) => {
            const userId = ctx.userId;
            return ctx.db.canvases({where: {project_id: {user_id: {id: userId}}}});
        }
    },

    getCanvasesOfUserOfProject: {
        resolve: (root, args, ctx: Context, info) => {
            const userId = ctx.userId;
            const projectId = args.project_id
            return ctx.db.canvases({where: {project_id: {id: projectId, user_id: {id: userId}}}});
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