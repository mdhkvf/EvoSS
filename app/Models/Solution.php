<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Solution extends Model
{
    protected $table = 'ProductConcernSolutions';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ProductConcernId', 'Title', 'ShortDesc', 'Description', 'VotesUp', 'VotesDown', 'IsAccepted', 'IsRemoved', 'Score'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['SubmittedAccountId', 'SubmittedDate'];

    public function concern(){
        return $this->belongsTo('App\Models\Concern');
    }
}