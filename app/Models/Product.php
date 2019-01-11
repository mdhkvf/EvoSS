<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'Products';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'Name', 'ImageUrl', 'ShortDesc', 'OfficialUrl', 'Manufacturer', 'Description', 'IsActive', 'IsPrivate'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function concerns(){
        return $this->hasMany('App\Models\Concern');
    }
}