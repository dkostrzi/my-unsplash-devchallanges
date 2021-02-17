import { uploadPhoto } from './Main.connector';

export const uploadPhotoFile = async (files: Array<File>, tags?: string): Promise<boolean> => {
    //TODO: obsluga bledow
    //TODO: przeniesc do seriwsu
    const errs = [];
    const formData = new FormData();
    const types = ['image/png', 'image/jpeg', 'image/gif'];
    const file = files[0];

    if (types.every((type) => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
    }

    if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
    }
    formData.append('file', file);

    if (tags) {
        formData.append('tags', tags);
    }

    try {
        await uploadPhoto(formData);
        return true;
    } catch (e) {
        //TODO: obsluga bledow
        console.log(e);
        return false;
    }
};