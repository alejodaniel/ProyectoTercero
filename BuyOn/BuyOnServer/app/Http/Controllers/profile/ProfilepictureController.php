<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use Exception;
use App\Profilepicture;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProfilepictureController extends Controller
{
    function get(Request $data)
    {
       $profilepicture = Profilepicture::where('idUser', $data->auth->id)->first();
       if ($profilepicture) {
         return response()->json($profilepicture,200);
       }else {
         return response()->json(["error" => "Record not found."],400);
       }
    }

    function paginate(Request $data)
    {
       $size = $data['size'];
       return response()->json(Profilepicture::paginate($size),200);
    }

    function post(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $profilepicture = new Profilepicture();
          $profilepicture->fileType = $result['fileType'];
          $profilepicture->fileName = $result['fileName'];
          $profilepicture->file = $result['file'];
          $profilepicture->idUser = $data->auth->id;
          $profilepicture->save();
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($profilepicture,200);
    }

    function put(Request $data)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $profilepicture = Profilepicture::where('id',$result['id'])->update([
             'fileType'=>$result['fileType'],
             'fileName'=>$result['fileName'],
             'file'=>$result['file'],
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($profilepicture,200);
    }

    function delete(Request $data)
    {
       $result = $data->json()->all();
       $id = $result['id'];
       return Profilepicture::destroy($id);
    }
}