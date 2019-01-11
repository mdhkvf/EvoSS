<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Concern extends Model
{
    protected $table = 'ProductConcerns';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ProductId', 'Title', 'ShortDesc', 'VotesUp', 'VotesDown', 'IsActive', 'IsPrivate'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    public function product(){
        return $this->belongsTo('App\Models\Product');
    }

    public function solutions(){
        return $this->hasMany('App\Models\Solution');
    }
}