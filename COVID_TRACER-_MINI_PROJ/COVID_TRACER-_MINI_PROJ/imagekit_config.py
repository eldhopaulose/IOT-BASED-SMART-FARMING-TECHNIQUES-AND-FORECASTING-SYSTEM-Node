from imagekitio import ImageKit

imagekit = ImageKit(
    private_key='private_lZ2TBYgMSGcC3gGuQGzGK5xsczM=',
    public_key='public_qsv1i9fzsRkkzkiFspK3NAjbUSo=',
    url_endpoint='https://ik.imagekit.io/wdjnrplts'
)

def upload(image_name):
    return imagekit.upload(
        file=open(image_name, "rb"),
        file_name=image_name,
        options={
            "response_fields": ["is_private_file", "tags"],
            "tags": ["tag1", "tag2"],
            "folder": "/COVID-TRACER/"
        },
    )['response']['url']
