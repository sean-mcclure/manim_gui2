from flask import request, jsonify
from explore import *
from gather import *
from prepare import *
from train import *
from validate import *

def save_app_to_disk(path, data):
    with open(path, 'w') as f:
        parsed=json.loads(data)
        json.dump(parsed, f, indent=4)
    return(True)

my_operations = {
    "save_app_to_disk" : save_app_to_disk
}

def request_return():
    passed_function = request.args.get("function")
    try:
        args = dict(request.args)
        del args['function']
        res = my_operations[passed_function](**args)
        return(jsonify(res))
    except ValueError:
        return(ValueError)