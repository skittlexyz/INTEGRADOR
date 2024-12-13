from fastapi import FastAPI # type: ignore
from fastapi.responses import FileResponse

app = FastAPI()
products_path = "./products/"

@app.get("/")
def read_root():
    return "API Neonshop online e funcionando!"

@app.get("/products/{product_id}/{image_id}")
async def get_product_image(product_id: int, image_id: int):
    return FileResponse(products_path + str(product_id) + "_" + str(image_id) + ".jpg")