/**
 * DemodataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    test: function (req, res) {
        return res.send("Nguyen Manh Cuong");
    },

    postf: async function (req, res) {
        let data = req.body.data;
        let importdata = await Demodata.create({name: data}).fetch()
        return res.send(importdata);


    }

};

