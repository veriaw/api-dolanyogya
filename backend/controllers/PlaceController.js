import Place from "../models/PlaceModel.js";

export const getAllPlaces = async (req, res) => {
  try {
    const response = await Place.findAll();

    res.status(200).json({
        message: "Berhasil Fetch Seluruh Data!",
        data: response,
    });
  } catch (error) {
    console.error("❌ Gagal mengambil data tempat:", error);
    res.status(500).json({ msg: "Gagal mengambil data tempat" });
  }
};

export const getPlacesByCategory = async (req, res) => {
  try {
    
    const { category } = req.body;

    const response = await Place.findAll({
      where: {
        category
      }
    });

    res.status(200).json({
        message: "Berhasil Fetch Seluruh Data Berdasarkan Kategori!",
        data: response,
    });
  } catch (error) {
    console.error("❌ Gagal mengambil data tempat:", error);
    res.status(500).json({ msg: "Gagal mengambil data tempat" });
  }
};