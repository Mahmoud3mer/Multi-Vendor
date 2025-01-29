
import { v2 as cloudinary } from 'cloudinary';
import categoryModel from '../database/models/category.model.js';
import { response } from '../utiles/response.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const add_category = async (req, res) => {
    const file = req.file;
    try {
        if (!file) {
            response(res, 400, { status: 'error', message: 'Image Upload Failed.' });
        } else {
            const name = req.body.name.trim();
            const slug = name.split(' ').join('-') // if name mans tshirt => mans-tshirt
            const result = await cloudinary.uploader.upload(file.path, { folder: 'categories' });
            if (result) {
                await categoryModel.create({
                    name: name,
                    image: result.url,
                    slug: slug
                })
                response(res, 200, { status: 'success', message: 'Category Added Success.' });
            } else {
                response(res, 400, { status: 'error', message: 'Image Upload Failed.' });
            }
        }
    } catch (error) {
        response(res, 500, { status: 'error', message: error.message });
    }
}

const get_categories = async (req, res) => {
    // console.log(req.query)
    const page = req.query.page;
    const limit = req.query.limit;
    const search = req.query.search;
    const skip = (page * limit) - limit;
    try {
        if (search !== '' && page && limit) {
            const categories = await categoryModel.find({
                $text: { $search: search }
            }).limit(limit).skip(skip).sort({createdAt: -1});
            const totalCategoriesNum = await categoryModel.find({
                $text: {$search: search}
            }).countDocuments();
            response(res, 200, { status: 'success', message: 'Get Categories Success.', data: categories, meta_data: { all_length: totalCategoriesNum} });
        } else if(search === '' && page && limit) {
            const categories = await categoryModel.find({}).limit(limit).skip(skip);
            const totalCategoriesNum = await categoryModel.find({}).countDocuments();
            response(res, 200, { status: 'success', message: 'Get Categories Success.', data: categories, meta_data: { all_length: totalCategoriesNum} });
        }else{
            const categories = await categoryModel.find({})
            const totalCategoriesNum = await categoryModel.find({}).countDocuments();
            response(res, 200, { status: 'success', message: 'Get Categories Success.', data: categories, meta_data: { all_length: totalCategoriesNum} });
        }

    } catch (error) {
        response(res, 500, { status: 'error', message: error.message });
    }
}

const get_specific_category = async (req, res) => {
    const { categoryID } = req.params;
    try {
        const category = await categoryModel.findById(categoryID);
        if (!category) return response(res, 400, { status: 'fail', message: 'Category Not Found.' });

        response(res, 200, { status: 'success', message: 'Get Category Success.', data: category });
    } catch (error) {
        response(res, 500, { status: 'error', message: error.message });
    }
}

const update_category = async (req, res) => {
    const { categoryID } = req.params;
    const body = req.body;
    try {
        const category = await categoryModel.findByIdAndUpdate(categoryID, { name: body.name, image: body.image }, { new: true });
        if (!category) return response(res, 400, { status: 'fail', message: 'Category Not Found.' });

        response(res, 200, { status: 'success', message: 'Updated Success.', data: category });
    } catch (error) {
        response(res, 500, { status: 'error', message: error.message });
    }
}

const delete_category = async (req, res) => {
    const { categoryID } = req.params;
    const body = req.body;
    try {
        console.log(categoryID);
        
        const category = await categoryModel.findByIdAndDelete(categoryID);
        if (!category) return response(res, 400, { status: 'fail', message: 'Category Not Found.' });

        response(res, 200, { status: 'success', message: 'Deleted Success.' });
    } catch (error) {
        response(res, 500, { status: 'error', message: error.message });
    }
}



export {
    add_category,
    get_categories,
    get_specific_category,
    update_category,
    delete_category
}