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

};