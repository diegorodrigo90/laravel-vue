<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VueRoute extends Controller
{
    public function index(){
        return view('home');
    }
}
